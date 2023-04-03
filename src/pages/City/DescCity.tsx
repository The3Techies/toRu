import MyComponentProps from './MyComponentProps'

const DescCity: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <div >
            {name}  descCity - description about the city
        </div> 
    );
}

export default DescCity