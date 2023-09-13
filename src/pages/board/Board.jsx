import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './board.scss';
import BoardMember from '../../components/boardMember/BoardMember';
import boardMembers from '../../data/boardMembers';

const Board = () => {
    return (
        <div>
            <Navbar />
            <div className='team intro'>
                <div className='text-center intro-text'>
                    <h2>Our Board</h2>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                </div>
            </div>
            <div className="section-bg2">
                <div className="container board-members">
                    {boardMembers.map((member, index) => (
                        <BoardMember
                            key={index}
                            name={member.name}
                            title={member.title}
                            imageUrl={member.imageUrl}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Board;
