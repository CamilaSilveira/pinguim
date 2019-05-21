    
    import React, { Component } from 'react';
    import {
      Carousel,
      CarouselItem,
      CarouselControl,
      CarouselIndicators,
      CarouselCaption
    } from 'reactstrap';
    
    const items = [
      {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1'
      },
      {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2'
      },
      {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3'
      }
    ];
    
    class Carousel1 extends Component {
      constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
      render() {
        const { activeIndex } = this.state;
    
        const slides = items.map((item) => {
          return (
            <CarouselItem
              className="custom-tag"
              tag="div"
              key={item.id}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
<div className="testimonials">
<div id="quote-carousel" className="carousel slide" data-ride="carousel">
<div className="item active">
    <blockquote>
        <img className="img-circle img-responsive" src="http://via.placeholder.com/112x112" alt="client" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat</p>
        <h5>Miss Elina Pool</h5>
        <h6>Developer - Adobe</h6>
    </blockquote>
</div>
</div>
</div>
              <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    
        return (
          <div>
            <style>
              {
                `.custom-tag {
                    max-width: 100%;
                    height: 500px;
                    background: black;
                  }`
              }
            </style>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </div>
        );
      }
    }
        
export default Carousel1;