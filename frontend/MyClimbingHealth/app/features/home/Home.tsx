import styles from "./home.module.css";

export default function Home() {
    return (
        <>
            <div className="flex flex-col px-6 py-10 gap-12">

                {/* Top */}
                <div className="flex flex-row gap-8 items-center">
                    <div className="flex flex-col flex-1 gap-4">
                        <h1 className={`text-4xl font-bold ${styles.PageTitle}`}>
                            Recovery built for climbers
                        </h1>
                        <p className={`text-base ${styles.SubText}`}>
                            Physical therapy that actually understands what it means to crimp, pinch, and send your project.
                        </p>
                        <div className="flex flex-row gap-3 mt-2">
                            <button className={`px-6 py-3 text-sm font-semibold ${styles.ButtonMain}`}>
                                Find a Therapist
                            </button>
                            <button className={`px-6 py-3 text-sm font-semibold ${styles.ButtonSecondary}`}>
                                Join the Community
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 h-64 flex items-center justify-center text-sm ${styles.MainImage}`}>
                        hero image
                    </div>
                </div>

                {/* Blocks section */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className={`text-2xl font-bold ${styles.SectionTitle}`}>Just a jug away from help</h2>
                        <p className={`text-sm mt-1 ${styles.SubText}`}>We never want to stop giving beta</p>
                    </div>

                    <div className="flex flex-row gap-4">

                        {/* Left feature card */}
                        <div className={`flex flex-col flex-1 gap-4 p-4 ${styles.FeatureBlock}`}>
                            <h3 className={`text-lg font-bold ${styles.FeatureBlockTitle}`}>Tactile Therapy</h3>
                            <p className={`text-sm ${styles.FeatureBlockSub}`}>
                                Empowering PTs to work hand in hand with patient goals to create the best environment for progress and growth.
                            </p>
                            <div className={`h-32 flex items-center justify-center text-sm ${styles.MainImage}`}>
                                image
                            </div>
                        </div>

                        {/* Right feature card */}
                        <div className={`flex flex-col justify-center flex-1 gap-4 p-4`}>
                            <div className={`p-4 ${styles.FeatureBlock}`}>
                                <h4 className={`text-lg font-bold ${styles.FeatureBlockTitle}`}>Community Support</h4>
                                <p className={`text-sm ${styles.FeatureBlockSub}`}>
                                    Growing our platform with the community helps us achieve better service and training guidance.
                                </p>
                            </div>

                            <div className="flex flex-row gap-4 mt-2">
                                <div className={`flex flex-col flex-1 gap-1 p-4 ${styles.FeatureBlockVariantLight}`}>
                                    <h5 className={`text-sm font-semibold ${styles.FeatureBlockTitle}`}>Guided Kilter Boarding</h5>
                                    <p className={`text-xs ${styles.FeatureBlockSub}`}>Custom routes to improve jugs and jumps</p>
                                </div>
                                <div className={`flex flex-col flex-1 gap-1 p-4 ${styles.FeatureBlockVariantDark}`}>
                                    <h5 className={`text-sm font-semibold ${styles.FeatureBlockVariantDarkTitle}`}>Guided Moon Boarding</h5>
                                    <p className={`text-xs ${styles.FeatureBlockSubVariantDark}`}>Custom routes to improve pinches and crimps</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* gen info  */}
                <div className="flex flex-row gap-8 items-center">
                    <div className={`flex-1 h-64 flex items-center justify-center text-sm ${styles.MainImage}`}>
                        image
                    </div>
                    <div className="flex flex-col flex-1 gap-4">
                        <h3 className={`text-2xl font-bold ${styles.SectionTitle}`}>Achieve better health</h3>
                        <p className={`text-sm ${styles.SubText}`}>
                            Traditional PT doesn't understand the strain of a 2-finger crimp or the torso load of a double paddle. We do.
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3 items-start">
                                <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center text-sm font-bold ${styles.IconBox}`}>
                                    Icon
                                </div>
                                <div>
                                    <h4 className={`text-sm font-semibold ${styles.FeatureBlockTitle}`}>I can do this philosophy</h4>
                                    <p className={`text-xs ${styles.SubText}`}>Progress-first mindset built around your climbing goals</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 items-start">
                                <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center text-sm font-bold ${styles.IconBox}`}>
                                    Icon
                                </div>
                                <div>
                                    <h4 className={`text-sm font-semibold ${styles.FeatureBlockTitle}`}>No "jug" can stop us</h4>
                                    <p className={`text-xs ${styles.SubText}`}>Dude it's a jug, just reach for it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Signup card */}
                <div className={`flex flex-col items-center gap-4 p-8 w-full ${styles.SignupCard}`}>
                    <h3 className={`text-xl font-bold ${styles.SignupTitle}`}>Join the community</h3>
                    <p className={`text-sm text-center ${styles.SignupSub}`}>
                        A community of climbers dedicated to recovery and strengthening
                    </p>
                    <div className="flex flex-row gap-3">
                        <button className={`px-6 py-2 text-sm font-semibold ${styles.ButtonMain}`}>
                            Find a Therapist
                        </button>
                        <button className={`px-6 py-2 text-sm font-semibold ${styles.ButtonSecondary}`}>
                            Join the community
                        </button>
                    </div>
                </div>

            </div>
    </>
    );
}