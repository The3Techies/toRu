import MyComponentProps from './MyComponentProps'

const TopUnivers: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <div>
          topUnivers - top 5 university in this city (image of the university and small description about this university).
        </div> 
    );
}

export default TopUnivers