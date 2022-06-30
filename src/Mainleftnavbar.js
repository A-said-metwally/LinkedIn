
function Mainleftnavbar(){
    return(
     <div className="left-navbar">
            <div class="recomendation">
                <div class="add-to">
                    <i class="fas fa-info-circle"></i>
                    <span>إضافة الى موجزك الرئيسى</span>
                </div>
                
                <div class="interresting">
                        <div class="post-info">
                            <div class="info">
                                <span>Ahmed Said</span>
                                <span>Frontend Developer</span>
                            </div>
                            <img src="image/logo.jpg" alt="image"/>
                        </div>
                        <button>متابعة<i class="fas fa-plus"></i></button>
                </div>

                <div class="interresting">
                    <div class="post-info">
                        <div class="info">
                            <span>Ahmed Said</span>
                            <span>Frontend Developer</span>
                        </div>
                        <img src="image/img2.jpg" alt="image"/>
                    </div>
                    <button>متابعة<i class="fas fa-plus"></i></button>
                </div>
                <div class="interresting">
                    <div class="post-info">
                        <div class="info">
                            <span>Ahmed Said</span>
                            <span>Frontend Developer</span>
                        </div>
                        <img src="image/img3.jpg" alt="image"/>
                    </div>
                    <button>متابعة<i class="fas fa-plus"></i></button>
                </div>

                <div class="see-more">عرض كل التوصيات<i class="fas fa-chevron-down"></i> </div>

            </div>
            

            <div class="advertise">
                <div class="ad-text">
                    <span>اعلان<i class="fas fa-ellipsis-h"></i></span>
                </div>
                <p class="tip">Ahmed , invest your future with this exclusive offer .</p>
                <div class="cover">
                    <img src="image/logo.jpg" alt="account-logo"/>
                    <span>in</span>
                </div>
                <p class="info"></p>
                <button>Get 50% off today</button>
            </div>


            <div class="footer">
                <div class="footer-links">
                    <a href="#">نبذة عنا</a>
                    <a href="#">إمكانية الوصول</a>
                    <a href="#">مركز المساعدة</a>
                    <a href="#">الخصوصية والبنود</a>
                    <a href="#">خيارات الإعلانات</a>
                    <a href="#">الدعاية والاعلان</a>
                    <a href="#">خدمات الاعمال التجارية</a>
                    <a href="#">احصل على تطبيق LinkedIn</a>
                    <a href="#">المزيد</a>
                </div>
                <div class="end">
                    <span>2021 &copy; LinkedIn Corporation</span>
                    <div><span>Linked</span><span>in</span></div>
                </div>
            </div>
     </div>
    )
}

export default Mainleftnavbar