
import iconsSpite from '../../assets/images/iconSprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '52px'} height={props.height || '52px'} viewBox={props.viewBox || '0 0 62 62'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSpite}#${props.iconId}`}/>
        </svg>
    );
};

