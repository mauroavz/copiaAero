// Utils & config
import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// External components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


// Internal components

const SectionContainer = (props) => {
  const isMdUp = useMediaQuery("(min-width:960px)");

  return (
    <Container
      id={props.id}
      maxWidth={props.maxWidth || "md"}
      component="section"
      className={props.className}
      disableGutters={props.disableGutters}
      style={props.sectionStyle}
    >
      <Grid container alignItems='center' style={props.gridContainerStyle}>
        {props.children}
      </Grid>
    </Container>
  );
};

SectionContainer.propTypes = {
  maxWidth: PropTypes.string,
  marginBottom: PropTypes.number,
  disableGutters: PropTypes.bool,
};

export default SectionContainer;
