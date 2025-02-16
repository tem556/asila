import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-style text-white mt-5 p-4 text-center">
      <div className="container-fluid">
        <div className="row center-row">
          <div className="col-md-6">
            <h5>من نحن</h5>
            <p className='justify-content-center align-content-center'>
              نحن ملتزمون بتقديم أفضل خدمة لمستخدمينا. يقدم نظامنا مجموعة من الميزات المصممة لمساعدتك في تحقيق أهدافك.
            </p>
          </div>
          <div className="col-md-3">
            <h5>روابط سريعة</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">الصفحة الرئيسية</a></li>
              <li><a href="#about" className="text-white">من نحن</a></li>
              <li><a href="#services" className="text-white">الخدمات</a></li>
              <li><a href="#contact" className="text-white">اتصل بنا</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>اتصل بنا</h5>
            <p>
              البريد الإلكتروني: info@example.com<br />
              الهاتف: +123 456 7890<br />
              العنوان: 123 شارع الرئيسي، أي مدينة، الولايات المتحدة
            </p>
          </div>
        </div>
        <hr className="bg-white" />
      </div>
    </footer>
  );
};

export default Footer;

