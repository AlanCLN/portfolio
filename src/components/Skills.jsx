import skills from "../data/skills.json";
import Skill from "../components/Skill";
import SectionTitle from "./SectionTitle";

const Skills = () => {

    return (
        <section className="skills-area relative pb-10" id="skills">
            <div className="container">
                <div className="skills-title">Skills</div>
                <div className="skills-content grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10">
                    {
                    skills.map(skill => {
                        return (
                            <Skill
                                key={skill.id}
                                title={skill.title}
                                icon={skill.icon}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </section>
    );
}

export default Skills;