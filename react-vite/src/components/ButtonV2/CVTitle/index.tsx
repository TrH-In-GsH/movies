type TTitle = {
    title: string
}

const CVTitle = ({ title }: TTitle) => {
    return (
        <p className="text-white text-lg mb-6 font-medium">{title}</p>
    )
}

export default CVTitle
