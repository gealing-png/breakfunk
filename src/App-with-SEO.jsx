import React from 'react';
import MetaHead from './MetaHead';

const AppWithSEO = () => {
    return (
        <div>
            <MetaHead />
            <header>
                <h1>ADHD Relief Tools and Activities</h1>
            </header>
            <section>
                <article>
                    <header>
                        <h2>Dopamine Boost Activities</h2>
                    </header>
                    <p>Engaging in quick physical exercises can help lift your mood and provide a dopamine boost.</p>
                </article>
                <article>
                    <header>
                        <h2>Boredom Interventions</h2>
                    </header>
                    <p>Try mindfulness activities, such as meditation or breathing exercises, to combat restlessness.</p>
                </article>
                <article>
                    <header>
                        <h2>Executive Function Support</h2>
                    </header>
                    <p>Use planners and apps to enhance focus and motivation techniques.</p>
                </article>
            </section>
            <footer>
                <p>Explore more mental health tools and evidence-based interventions for better management.</p>
            </footer>
        </div>
    );
};

export default AppWithSEO;