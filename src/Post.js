import React, {useState} from 'react'

function Post({id, accountName, accountJop, postTime, accountImage, postText, postImage , RemovePost }){

    const [View ,setView] = useState(false)
    const [Like ,setLike] = useState(true)
    return(
        <div class="posts">
        <div class="top">
            <div class="menu">
                <i class="fas fa-ellipsis-h"></i>
                <div class="menu-items">
                    <ul>
                        <li>حفظ المنشور</li>
                        <li>إلغاء المتابعة</li>
                        <li>المشاهدة لاحقا</li>
                        <li>إضافة تعليق</li>
                        <li data-id={id} onClick={RemovePost}>حذف منشور</li>
                    </ul>
                </div>
            </div>
            <div class="post-info">
                <div class="info">
                    <span>{accountName}</span>
                    <span>{accountJop}</span>
                    <span>{postTime}</span>
                </div>
                <img src={accountImage} alt="myimage"/>
            </div>
        </div>
        <div class="post-text">
            {View? postText : postText.slice(0 , 50)}
            <br/>
            <span data-id={id} onClick={()=>setView(!View)} class="view-more">{View? "عرض أقل ." : "عرض المزيد ..."}</span>
        </div>
        <div class="view-translation">عرض الترجمة ..</div>
        <div class="post-img">
            {postImage && <img src={postImage} alt="post-img"/>}
            
        </div>
        <hr/>
        <div class="bottom">
            <div class="attach">
                <div><i class="fas fa-paper-plane" ></i>إرسال</div>
                <div><i class="fas fa-share" ></i>مشاركة</div>                           
                <div id="addComment"><i class="fas fa-comment-dots" ></i>تعليق</div>
                <div onClick={()=>setLike(!Like)}><i class={Like? "fas fa-thumbs-up" : "fas fa-thumbs-down"} ></i>إعجاب</div>
            </div>
            <div class="post" id="comment-box">
                <div class="input">
                    <form action="">
                        <input type="text" name="addPost" id="addPost" placeholder="كتابة تعليق "/>
                    </form>
                </div>
                <img src={accountImage} alt="account-logo"/>
            </div>

        </div>
    </div>
)
}

export default Post