import MyComponentProps from './MyComponentProps'

const CityHero: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <div className='mt-20'>
            {name}
        </div>
    );
}

export default CityHero