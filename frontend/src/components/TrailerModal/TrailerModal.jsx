import React from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const TrailerModal = ({ isModalOpen, video, handleCancel, detail }) => {
  const youtubeUrl = "https://www.youtube.com/watch?v=";

  TrailerModal.propTypes = {
    isModalOpen: PropTypes.bool,
    handleCancel: PropTypes.func,
    video: PropTypes.object,
    detail: PropTypes.object,
  };

  return (
    <Modal
      title={detail.title}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width="70vw"
      bodyStyle={{ height: "70vh" }}
      data-testid="trailerModal"
    >
      <ReactPlayer
        className="react-player"
        url={youtubeUrl + video.key}
        playing
        width="100%"
        height="100%"
        controls={true}
        muted
      ></ReactPlayer>
    </Modal>
  );
};

export default TrailerModal;
