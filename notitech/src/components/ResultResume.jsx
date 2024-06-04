import ResultContent from './ResultContent'
import './resultResume.css'

const ResultResume = () => {
    return (

        <>
            <div className="resultResume">
                <div className="titre un">
                    <h3 className="text-2xl font-bold uppercase">Resultats</h3>
                </div>
                    <ResultContent />
            </div>
        </>
    )
}

export default ResultResume