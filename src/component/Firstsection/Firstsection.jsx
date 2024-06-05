

const Firstsection = () => {
    return (
        <section>
            <div className="card w-full image-full">
                <img className="w-screen h-[240px] md:h-[400px] lg:h-[600px]" src="/image/cover.jpg" alt="" />
                <div className="card-body">
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-center md:tracking-widest md:mt-28">Discover an exceptional cooking class tailored for you!</h2>
                    <p className="text-center">Cooking, also known as cookery or professionally as the culinary arts, is the art, science and craft of using heat to make food</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Firstsection;