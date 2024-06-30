

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center my-10">
            <h2 className="text-lg text-[#61332a]">---{title}---</h2>
            <h4 className="text-2xl font-semibold">{subTitle}</h4>
        </div>
    );
};

export default SectionTitle;