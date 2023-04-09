import MyComponentProps from './MyComponentProps'

const CityHero: React.FC<MyComponentProps> = ({ Cityname }) => {
    return (
        <div className='mt-20'>
            {Cityname}
        </div>
    );
}

export default CityHero