import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, modalToggle: false };
  }

  handleModal = () => {
    this.setState({ modalToggle: !this.state.modalToggle });
    console.log(`in handleModal method. modalOn is ${this.state.modalToggle}`);
  };

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        console.log(`id is ${this.props.id}`);
        console.log("updating details");
        console.log(`animal retrieved is ${animal}`);
        if (animal === undefined)
          this.setState({ error: true, loading: false });
        else {
          this.setState({
            name: animal.name,
            animal: animal.type,
            location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
            description: animal.description,
            media: animal.photos,
            breed: animal.breeds.primary,
            loading: false,
          });
        }
      })
      .catch(console.error);
  }

  render() {
    const { name, animal, location, description, media, breed } = this.state;

    if (this.state.loading) return <React.Fragment>Loading...</React.Fragment>;
    if (this.state.error)
      return <React.Fragment>Pet data not available</React.Fragment>;
    return (
      <div className="details">
        <Carousel media={media}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ background: theme }} onClick={this.handleModal}>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <Modal modalToggle={this.state.modalToggle}>
            <div>
              <button onClick={this.handleModal}>close modal</button>
            </div>
          </Modal>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// function DetailWithErrorBoundary(props) {
//   return (
//     <ErrorBoundary>
//       <Details {...props} />
//     </ErrorBoundary>
//   );
// }
// export default DetailWithErrorBoundary;
export default Details;
