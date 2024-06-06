

const Firstsection = () => {
    return (
        <section>
            <div className="card w-full image-full">
                <img className="w-screen h-[440px] md:h-[400px] lg:h-[645px] xl:h-[600px]" src="cover.jpg" alt="" />
                <div className="card-body px-1 lg:px-28 md:leading-8">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center md:tracking-widest mt-1 md:mt-11 lg:mt-28">Discover an exceptional cooking class tailored for you!</h2>
                    <p className="text-center px-1 md:px-2 lg:px-10 xl:px-28 mt-1 md:mt-5">Cooking, also known as cookery or professionally as the culinary arts, is the art, science and craft of using heat to make food.Whether you're a novice wanting to master the basics or a seasoned home cook aiming to refine your culinary skills, there's a perfect class out there for you.</p>
                    <div className="card-actions justify-center md:gap-10 lg:mb-28 xl:mb-36">
                        <button className="btn bg-[#0BE58A] text-black border-none lg:w-40 text-sm md:text-xl">Explore Now</button>
                        <button className=" border text-white md:w-40 lg:w-40 px-2 py-3 md:py-2 rounded-lg text-sm md:text-xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Firstsection;