import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messageActions';
import MessageField from '../components/MessageField';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        messages: store.messageReducer.messages,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);