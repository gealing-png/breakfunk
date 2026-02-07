import React from 'react';
import React, { useState } from 'react';
import { Zap, Brain, Activity, Wind, Droplets, Apple, Coffee, Music, Book, Dumbbell, Sun, Snowflake, AlertCircle } from 'lucide-react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>BreakFunk - Coming Soon!</h1>
      <p>ADHD Toolkit to break free from boredom</p>
export default function App() {
  const [currentView, setCurrentView] = useState('intro');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [showEmergencyResult, setShowEmergencyResult] = useState(false);

  const activities = {
    physical: [
      { name: "20-Minute Run", duration: "20 min", icon: Activity, benefit: "2hr dopamine boost + endorphin release" },
      { name: "50 Jumping Jacks", duration: "5 min", icon: Dumbbell, benefit: "Quick energy spike + blood flow to brain" },
      { name: "Dance to 3 Songs", duration: "10 min", icon: Music, benefit: "Mood elevation + creative stimulation" },
      { name: "Take the Stairs 5x", duration: "10 min", icon: Activity, benefit: "Adrenaline + focus improvement" },
      { name: "Yoga Flow", duration: "15 min", icon: Activity, benefit: "Stress reduction + mental clarity" },
    ],
    breathwork: [
      { name: "Wim Hof Breathing", duration: "10 min", icon: Wind, benefit: "Oxygen boost + mental reset + energy surge" },
      { name: "Box Breathing (4-4-4-4)", duration: "5 min", icon: Wind, benefit: "Calms nervous system + improves focus" },
      { name: "Deep Belly Breathing", duration: "3 min", icon: Wind, benefit: "Reduces anxiety + grounds you in present" },
      { name: "4-7-8 Breathing", duration: "5 min", icon: Wind, benefit: "Relaxation + mental clarity" },
    ],
    sensory: [
      { name: "Cold Shower (2-5 min)", duration: "5 min", icon: Snowflake, benefit: "Massive dopamine spike + alertness" },
      { name: "Ice Face Dip", duration: "2 min", icon: Snowflake, benefit: "Activates vagus nerve + instant wake-up" },
      { name: "Hot-Cold Contrast", duration: "10 min", icon: Snowflake, benefit: "Circulation boost + sensory reset" },
      { name: "Get Outside in Sunlight", duration: "10 min", icon: Sun, benefit: "Vitamin D + serotonin + circadian rhythm reset" },
      { name: "Listen to Music (New Genre)", duration: "15 min", icon: Music, benefit: "Novel stimulus + emotional regulation" },
    ],
    nutrition: [
      { name: "Drink 500ml Water", duration: "2 min", icon: Droplets, benefit: "Hydration = better focus + energy" },
      { name: "Eat Protein Snack", duration: "5 min", icon: Apple, benefit: "Stable energy + neurotransmitter building blocks" },
      { name: "Have Some Dark Chocolate", duration: "2 min", icon: Apple, benefit: "Mild dopamine boost + antioxidants" },
      { name: "Green Tea or Coffee", duration: "5 min", icon: Coffee, benefit: "Caffeine + L-theanine = focused calm" },
      { name: "Handful of Nuts", duration: "2 min", icon: Apple, benefit: "Omega-3s for brain function + sustained energy" },
    ],
    mental: [
      { name: "5-Minute Free Write", duration: "5 min", icon: Book, benefit: "Clears mental clutter + processes emotions" },
      { name: "Read Something New", duration: "15 min", icon: Book, benefit: "Novel information = dopamine + learning" },
      { name: "Solve a Puzzle", duration: "10 min", icon: Brain, benefit: "Engages problem-solving + sense of achievement" },
      { name: "Learn 5 Words in New Language", duration: "10 min", icon: Brain, benefit: "Novelty + cognitive challenge" },
      { name: "Watch Educational Video", duration: "10 min", icon: Brain, benefit: "Curiosity satisfaction + learning dopamine" },
    ],
    social: [
      { name: "Text a Friend", duration: "5 min", icon: Activity, benefit: "Social connection + oxytocin release" },
      { name: "Call Someone You Love", duration: "10 min", icon: Activity, benefit: "Emotional support + perspective shift" },
      { name: "Compliment 3 People Online", duration: "5 min", icon: Activity, benefit: "Prosocial behavior + mood boost" },
      { name: "Share Something You Created", duration: "5 min", icon: Activity, benefit: "Vulnerability + connection + validation" },
    ],
  };

  const categoryInfo = {
    physical: { name: "Physical Movement", icon: Dumbbell, color: "bg-red-500", description: "Get your body moving to boost dopamine and endorphins" },
    breathwork: { name: "Breathwork", icon: Wind, color: "bg-blue-500", description: "Regulate your nervous system and increase oxygen flow" },
    sensory: { name: "Sensory Reset", icon: Snowflake, color: "bg-cyan-500", description: "Shock your system awake with intense sensory experiences" },
    nutrition: { name: "Nutrition & Hydration", icon: Apple, color: "bg-green-500", description: "Fuel your brain with what it needs to function" },
    mental: { name: "Mental Engagement", icon: Brain, color: "bg-purple-500", description: "Challenge your mind with novel learning and creativity" },
    social: { name: "Social Connection", icon: Activity, color: "bg-pink-500", description: "Connect with others to boost oxytocin and belonging" },
  };

  const handleEmergencyButton = () => {
    const allActivities = Object.values(activities).flat();
    const randomActivity = allActivities[Math.floor(Math.random() * allActivities.length)];
    setCurrentActivity(randomActivity);
    setShowEmergencyResult(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('category');
    setShowEmergencyResult(false);
  };

  const handleActivityClick = (activity) => {
    setCurrentActivity(activity);
    setShowEmergencyResult(false);
  };

  const IntroView = () => (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <Brain className="w-16 h-16 mx-auto text-purple-500" />
        <h1 className="text-4xl font-bold text-gray-800">Welcome to BreakFunk</h1>
        <p className="text-xl text-gray-600">Your toolkit for breaking free from boredom and restlessness</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-600" />
          What's Happening in Your Brain?
        </h2>

        <div className="space-y-3 text-gray-700">
          <p className="leading-relaxed">
            When you're feeling bored or restless (especially with ADHD), your brain is experiencing <strong>low dopamine</strong>.
            Dopamine is your brain's "motivation molecule" - it helps you focus, feel pleasure, and take action.
          </p>

          <div className="bg-white rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-lg text-purple-700">The ADHD Brain Challenge:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Lower baseline dopamine</strong> - Makes it harder to initiate tasks and maintain focus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Dopamine transporter overactivity</strong> - Reabsorbs dopamine too quickly, leaving you feeling "meh"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Prefrontal cortex underactivity</strong> - The "control center" struggles without enough dopamine</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-lg text-green-700">How These Activities Help:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Immediate dopamine boost</strong> - Activities like cold showers, exercise, and breathwork trigger rapid dopamine release</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>2-hour mood lift</strong> - Many interventions provide sustained dopamine elevation, improving focus and motivation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Enhanced prefrontal cortex function</strong> - Better decision-making, impulse control, and executive function</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Breaking the pattern</strong> - Novel activities create new neural pathways and interrupt rumination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="font-semibold text-amber-900">The Emergency Button</h3>
            <p className="text-sm text-amber-800">
              Feeling totally stuck? Hit the emergency button below for an instant, random intervention.
              Sometimes the best thing is to just <em>do something</em> - anything - to break the cycle.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentView('main')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition-colors"
      >
        Let's Break the Funk
      </button>
    </div>
  );
}

export default App;
  const MainView = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">BreakFunk</h1>
        <p className="text-gray-600">Choose your intervention or hit emergency</p>
      </div>

      <button
        onClick={handleEmergencyButton}
        className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-6 rounded-2xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
      >
        <Zap className="w-8 h-8" />
        <span className="text-xl">EMERGENCY: Break the Funk NOW</span>
      </button>

      {showEmergencyResult && currentActivity && (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-300 animate-pulse">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-8 h-8 text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-800">Your Emergency Activity:</h3>
          </div>
          <div className="bg-white rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <currentActivity.icon className="w-6 h-6 text-orange-600" />
              <h4 className="text-xl font-semibold text-gray-800">{currentActivity.name}</h4>
            </div>
            <p className="text-gray-600">Duration: {currentActivity.duration}</p>
            <p className="text-sm text-green-700 font-medium">✓ {currentActivity.benefit}</p>
          </div>
          <p className="text-center mt-4 text-gray-700 font-medium">Do it RIGHT NOW. No thinking, just action!</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(categoryInfo).map(([key, category]) => (
          <button
            key={key}
            onClick={() => handleCategoryClick(key)}
            className={`${category.color} hover:opacity-90 text-white p-6 rounded-xl transition-all transform hover:scale-105 shadow-md`}
          >
            <category.icon className="w-10 h-10 mx-auto mb-3" />
            <h3 className="font-semibold text-sm">{category.name}</h3>
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentView('intro')}
        className="w-full text-purple-600 hover:text-purple-700 font-medium py-2"
      >
        ← Back to Brain Science
      </button>
    </div>
  );

  const CategoryView = () => {
    const category = categoryInfo[selectedCategory];
    const categoryActivities = activities[selectedCategory];

    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <button
            onClick={() => {
              setCurrentView('main');
              setSelectedCategory(null);
              setCurrentActivity(null);
            }}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Back to Categories
          </button>

          <div className={`${category.color} text-white p-6 rounded-2xl`}>
            <category.icon className="w-12 h-12 mb-3" />
            <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
            <p className="opacity-90">{category.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          {categoryActivities.map((activity, index) => (
            <button
              key={index}
              onClick={() => handleActivityClick(activity)}
              className={`w-full text-left bg-white hover:bg-gray-50 border-2 ${
                currentActivity === activity ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
              } rounded-xl p-4 transition-all`}
            >
              <div className="flex items-start gap-3">
                <activity.icon className={`w-6 h-6 flex-shrink-0 mt-1 ${currentActivity === activity ? 'text-purple-600' : 'text-gray-600'}`} />
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold text-gray-800">{activity.name}</h3>
                  <p className="text-sm text-gray-600">Duration: {activity.duration}</p>
                  <p className="text-sm text-green-700 font-medium">✓ {activity.benefit}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {currentActivity && (
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Start?</h3>
            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <currentActivity.icon className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-800">{currentActivity.name}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">Duration: {currentActivity.duration}</p>
              <p className="text-sm text-green-700 font-medium">✓ {currentActivity.benefit}</p>
            </div>
            <p className="text-center text-gray-700 font-medium">
              Set a timer and commit. Your brain will thank you! 🧠✨
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {currentView === 'intro' && <IntroView />}
          {currentView === 'main' && <MainView />}
          {currentView === 'category' && <CategoryView />}
        </div>

        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>Breaking free from boredom, one action at a time 🌟</p>
        </div>
      </div>
    </div>
  );
}
