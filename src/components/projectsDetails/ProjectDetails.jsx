/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { useContext } from 'react';
import { Button, Card, Badge } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { ThemeContext } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
    fontSize: 24,
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

const ProjectDetail = (props) => {
  const theme = useContext(ThemeContext);
  const parseBodyText = (text) => <ReactMarkdown children={text} />;
  const { project } = props;

  return (
    <>
      <div
        className="modalHeader"
        style={{
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
        }}
      >
        <img src="images/projects/uncheckimg.png" onClick={props.onClose} alt="uncheck" />
      </div>
      {project?.images?.length > 0
      && (
      <div
        style={{
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
          padding: '10px',
        }}
      >
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
        >
          {project?.images?.map((img) => (
            <div>
              <img src={img.image} alt="legend 1" />
            </div>
          ))}
        </Carousel>

      </div>
      )}
      <Card.Body style={{
        backgroundColor: theme.cardBackground,
        borderColor: theme.cardBorderColor,
      }}
      >
        <Card.Title style={styles.cardTitleStyle}>{project?.title}</Card.Title>
        <Card.Text style={styles.cardTextStyle}>
          {parseBodyText(project?.bodyText)}
        </Card.Text>
      </Card.Body>
      <Card.Body style={{
        backgroundColor: theme.cardBackground,
        borderColor: theme.cardBorderColor,
        textAlign: 'center',
      }}
      >
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
      </Card.Body>
      {project?.tags && (
        <Card.Footer style={{ backgroundColor: theme.cardFooterBackground, textAlign: 'center' }}>
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
      )}
    </>
  );
};
export default ProjectDetail;
