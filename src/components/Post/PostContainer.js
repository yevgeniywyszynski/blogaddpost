import { connect } from "react-redux";
import Post from '../Post/Post';
import { getPostById } from "../redux/PostRedux";

const mapStateToProps = state => ({
  getPostById: (id) => getPostById(state,id)
})


export default connect(mapStateToProps, null)(Post);