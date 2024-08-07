import PageCards from "../components/PageCards"
import Projects from "../components/Projects"

type Props = {}

const Portfolio = (props: Props) => {
    return (

        <PageCards title='Portfolio' content={<Projects />} />

    )
}

export default Portfolio