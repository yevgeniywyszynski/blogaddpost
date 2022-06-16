import { connect } from "react-redux";
import { getAllPost } from "../redux/PostRedux";
import AllPost from "./AllPost";

const mapStateToProps = state => ({
    allPost: getAllPost(state)
})


export default connect(mapStateToProps, null)(AllPost);