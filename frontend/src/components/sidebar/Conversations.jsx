import useGetConversation from '../../hooks/useGetConversation';
import {getRandomColor} from '../../utils/getRandomColor';
import Conversation from './Conversation';

const Conversations = () => {
    const{loading,conversations}=useGetConversation();

    return(
        <div className='py-2 flex flex-col overflow-auto'>
        {conversations.map((conversation, idx) => (
            <Conversation
                key={conversation._id}
                conversation={conversation}
                emoji={getRandomEmoji()}
                lastIdx={idx === conversations.length - 1}
            />
        ))}

        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
);
};
export default Conversations;
