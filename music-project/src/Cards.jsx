import './index.css'
import fender1 from './assets/fender1.png'
import fenderguitar1 from './assets/fenderguitar1.png'
import gibsonlogo from './assets/gibsonlogo.png'
import gretschlogo from './assets/gretschlogo.png'
import ibanezlogo from './assets/ibanezlogo.png'
import tagimalogo from './assets/tagimalogo.png'

function Cards() {
    return (
        <div className="section-container">
            <div className="section-title">
                <div className="section-line"></div>
                <h3>Produtos em Destaque</h3>
                <div className="section-line"></div>
            </div>
            <div className="section-layer">
                <div className="section-layer-cards">
                    <img src={fender1} height={50} style={{ objectFit: 'contain' }} alt="Fender Logo" />
                    <img src={fenderguitar1} height={70} style={{ objectFit: 'contain' }} alt="Fender Guitar" />
                    <h2>Guitarra Fender American Professional II Stratocaster®</h2>
                </div>
                <div className="section-layer-cards">
                    <img src={gibsonlogo} height={50} style={{ objectFit: 'contain' }} alt="Gibson Logo" />
                    <img src={fenderguitar1} height={70} style={{ objectFit: 'contain' }} alt="Fender Guitar" />
                    <h2>Guitarra Fender American Professional II Stratocaster®</h2>
                </div>
                <div className="section-layer-cards">
                    <img src={ibanezlogo} height={50} style={{ objectFit: 'contain' }} alt="Ibanez Logo" />
                    <img src={fenderguitar1} height={70} style={{ objectFit: 'contain' }} alt="Fender Guitar" />
                    <h2>Guitarra Fender American Professional II Stratocaster®</h2>
                </div>
                <div className="section-layer-cards">
                    <img src={tagimalogo} height={50} style={{ objectFit: 'contain' }} alt="Tagima Logo" />
                    <img src={fenderguitar1} height={70} style={{ objectFit: 'contain' }} alt="Fender Guitar" />
                    <h2>Guitarra Fender American Professional II Stratocaster®</h2>
                </div>
                
            </div>
        </div>
    );
}

export default Cards;
