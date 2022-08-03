

const Skill = (props) => {

    const { title, icon } = props

    return (
        <div className="skill-container flex justify-center items-center h-28 lg:h-32">
            <div className="w-24 h-24">
                <img 
                    className="w-full h-full"
                    src={`/images/skills/${icon}`}
                    alt={title}
                />
            </div>
        </div>
    )
}

export default Skill;

