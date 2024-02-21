type TTitle = {
    titleblack: string
}

const CVTitleBlack = ({ titleblack }: TTitle) => {
    return (
        <p className="text-black text-lg mb-6 font-medium	">{titleblack}</p>
    )
}

export default CVTitleBlack
