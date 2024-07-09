import { motion } from "framer-motion";

const Section = (props) => {
    const { children } = props;

    return ( <motion.section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center
        `} 
        initial={{
             opacity: 0,
                y: 50,
        }}
        whileInView={{
              opacity: 1,
              y: 0,
                transition: {
                    duration: 1,
                    delay: 0.5,
                }, 
            }}
        >
            {children}
        </motion.section>);
};

export const Interface = () => {
    return  (
        <div className="flex flex-col items-center w-screen">
    <AboutSection />
    <Section>
        <h1>Work</h1>
    </Section>
    <Section>
        <h1>Inspire</h1>
    </Section>
    <Section>
        <h1>Connect</h1>
    </Section>
    </div>
    );
};

const AboutSection = () => {
    return (
    <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
            Hi, I'm 
            <br />
            <span className="bg-white px-1 italic">Jules Mpano</span>
        </h1>
        <motion.p className="text-lg text-gray-600 mt-4"
        initial={{
            opacity: 0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1.5,
            },
        }}
        >
            I like to create things to inspire 
            <br />
            people to connect with each other.    
        </motion.p>
        <motion.button className={`bg-indigo-600 text-white py-4 px-8
            rounded-lg font-bold text-lg mt-16`}
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 2.5,
                },
            }}
        >
        Let's Connect!
        </motion.button>
    </Section>

    );  
};
