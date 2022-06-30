
function Mainrightnavbar(){
    return(
     <div className="right-navbar">
            <div class="first">
                <div class="first-top">
                    <img src="image/img3.jpg" alt="back-ground" class="back-ground"/>
                    <img src="image/logo.jpg" alt="account-logo" class="account-logo"/>
                    <div class="info">
                        <span>Ahmed Said</span>
                        <span>Frontend Developer</span>
                    </div>
                </div>
                <div class="statics">
                    <div class="account-statics">
                        <div class="count">33</div>
                        <div>من زار ملفك الشخصى</div>
                    </div>
                    <div class="account-statics">
                        <div class="count">82</div>
                        <div>من المشاهدات لمنشورك  </div>
                    </div>
                </div>
                <div class="premium">
                    <span>الحصول على بيانات وأدوات حصرية</span>
                    <strong>إعادة تفعيل حساب بريميوم<i class="fas fa-flag-checkered"></i></strong>
                </div>
                <div class="my-element">
                    <strong>عناصرى<i class="fas fa-flag-checkered"></i></strong>
                </div>

            </div>
           
            <div class="second">
                <span>حديث</span>
                <div class="new">
                    <div class="new-container">
                        <a href="#">CSS</a><span>#</span>
                    </div>
                    <div class="new-container">
                        <a href="#">js_tips</a><span>#</span>
                    </div>
                    <div class="new-container">
                        <a href="#">React js</a><span>#</span>
                    </div>
                    <div class="new-container">
                        <a href="#">Bootstrab</a><span>#</span>
                    </div>
                    <div class="new-container">
                        <a href="#">Sass</a><span>#</span>
                    </div>
                </div>
            
                <div class="groups">
                    <span class="title">المجموعات</span>
                    <div class="new">
                        <div class="new-container">
                            <a href="#">Wep Developer</a><span>@</span>
                        </div>
                        <div class="new-container">
                            <a href="#">Arab Programmers</a><span>@</span>
                        </div>
                        <div class="new-container">
                            <a href="#">React js</a><span>@</span>
                        </div>
                        <div class="new-container">
                            <a href="#">Bootstrab Comunity</a><span>@</span>
                        </div>
                        <div class="new-container">
                            <a href="#">Git Hub</a><span>@</span>
                        </div>
                    </div>
                    <button><i class="fas fa-chevron-down"></i> عرض المزيد</button>
                </div>

                <div class="occasion">
                    <span class="title">المناسبات</span>
                    <div class="new">
                        <div class="new-container">
                            <a href="#">Muhammad Birthday in 28-07-2014</a><span>-</span>
                        </div>
                    </div>
                    <button><i class="fas fa-chevron-down"></i> عرض الكل</button>
                </div>

                <div class="folowup">
                    <span class="title">متابعة الوسومات ( الهاشتاج )</span>
                    <div class="new">
                        <div class="new-container">
                            <a href="#">News</a><span>+</span>
                        </div>
                        <div class="new-container">
                            <a href="#">Movies</a><span>+</span>
                        </div>
                        <div class="new-container">
                            <a href="#">Sports</a><span>+</span>
                        </div>
                    </div>
                    <button><i class="fas fa-chevron-down"></i> عرض الكل</button>
                </div>

            </div>
     </div>
    )
}

export default Mainrightnavbar