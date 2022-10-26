import MiniInfoLabel from "../../Components/MiniInfoLabel/MiniInfoLabel"
import './style.scss'
import PersonIcon from '@mui/icons-material/Person';

export default function StaticsPage(){
    return(
        <div className="StaticsPage">
            
            <div className="info_labels">

                <div className="infolabel">

                    <div className="content">
                        <div className="title">
                        <p>Пользователи</p>
                        <PersonIcon sx={{ fontSize: 40}}/>
                        </div>
                        
                        <div className="cout">
                            <h>1234 </h>
                            <p>+123</p>
                        </div>
                       
                    </div>
                </div>

                <div className="infolabel">

            <div className="content">
                <div className="title">
                <p>Объявления</p>
                <PersonIcon sx={{ fontSize: 40}}/>
                </div>
                
                <div className="cout">
                    <h>1234 </h>
                    <p>+123</p>
                </div>
            
            </div>
            </div>

            <div className="infolabel">

            <div className="content">
                <div className="title">
                <p>Сделки</p>
                <PersonIcon sx={{ fontSize: 40}}/>
                </div>
                
                <div className="cout">
                    <h>1234 </h>
                    <p>+123</p>
                </div>
            
            </div>
            </div>


            </div>

        </div>
    )
}