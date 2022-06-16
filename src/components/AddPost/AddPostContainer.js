import { connect } from "react-redux";
import AddPost from '../AddPost/AddPost';
import {addPost} from '../redux/PostRedux';

const mapDisptachToProps = dispatch => ({
    addPostStore: (post) => dispatch(addPost(post)),
})

export default connect(null, mapDisptachToProps )(AddPost);