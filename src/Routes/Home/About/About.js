import './About.css'

const About = () => {
  return (
    <div className="section" id="about">
      <div className="jumbotron">
        <div className="parent">
          <div className="child">
            <h1 className="display-4">Hakkımızda</h1>
            <p id="AboutUsLead" className="lead">
               TR- HOPES İnsani Yardım ve Sağlık Operasyonlarının Planlanması ve Sürdürülebilirlik Çalışma Grubu
               <br/>
               (National Working Group- TR- Humanitarian and Health Operations and Sustainability)
               <br/>
               <br/>
               TR-HOPES afetlerde insani yardım lojistiği ve tedarik zincirini planlama
               ve uygulamaya yönelik bilimsel araştırmalar yürütmek ve araştırma sonuçlarını 
               ilgili kurum ve kuruluşlarla paylaşarak toplumsal katkı sağlamak amacıyla biraraya gelen
               gönüllü akademisyenlerden oluşan bir çalışma grubudur. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
