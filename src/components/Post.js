import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import _ from "lodash";
import "../Post.css";

const Post = ({ data }) => {
  return (
    <div className="postContainer">
      <Card>
        <CardHeader className="titleStyle">{data.title}</CardHeader>
        <CardBody>
          <CardSubtitle className="subTitleStyle">{data.body}</CardSubtitle>
          <CardSubtitle>
            <div className="subTitle">Comments</div>
          </CardSubtitle>
          <CardText>
            <ListGroup>
              {!_.isEmpty(data.comments) && (
                <>
                  {data.comments.map(comment => (
                    <ListGroupItem className="listStyle">
                      {comment.body}
                      <div className="emailStyle">
                        <span>{comment.email}</span>
                      </div>
                    </ListGroupItem>
                  ))}
                </>
              )}
            </ListGroup>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
