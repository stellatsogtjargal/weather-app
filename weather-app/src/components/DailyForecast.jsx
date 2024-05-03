import "./forecast.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton
} from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];

const DailyForecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInAWeek));
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice().map((item,idx)=>(
                    <AccordionItem key = {idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img 
                                        alt="weather icon"
                                        className="icon-small"
                                        src = {`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="minmax">{Math.round(item.temp.min)}°F / {Math.round(item.temp.max)}°F</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}
export default DailyForecast;