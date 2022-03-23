/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import {
  Card, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import ProjectDetail from '../projectsDetails/ProjectDetails';
// import ReactMarkdown from 'react-markdown';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 22,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);
  const [selectedCard, setSelectedCard] = useState();
  const { project } = props;

  const getSelectedCardDetail = (data) => {
    setSelectedCard(data);
  };

  const onClose = () => {
    setSelectedCard(false);
  };

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
        }}
        className="projectCards"
        text={theme.bsSecondaryVariant}
        onClick={() => { getSelectedCardDetail(project); }}
      >
        <Card.Img variant="top" src={project?.image} style={{ maxHeight: '12rem' }} />
        <div className="overlay">
          <img src="images/eye.png" className="view" alt="view" />
        </div>
        <Card.Body className="projectCard">
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Title style={styles.cardTitleStyle}>
            <img src="images/eye.png" className={theme.cardBackground === '#060606' ? 'viewBtnLight' : 'viewBtnDark'} alt="view" />
          </Card.Title>
        </Card.Body>

        {/* <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={'outline-' + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body> */}
        {/* {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )} */}
      </Card>
      {selectedCard && (
      <ModalWrapper>
        <ProjectDetail
          style={styles}
          theme={theme}
          project={selectedCard}
          backgroundColor={theme.cardBackground}
          borderColor={theme.cardBorderColor}
          onClose={onClose}
        />
      </ModalWrapper>
      )}
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    links: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
