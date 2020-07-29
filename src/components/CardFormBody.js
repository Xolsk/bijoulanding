import React from "react"

export default class CardFormBody extends React.Component {

      state={

        title:this.props.slide.title
      }


    onDrag = () => {

        const activeSlide = this.props.slide;
        this.props.setOnDrag(activeSlide);

    }
    render() {

        const fixedIdentifier = this.props.slide.id;

        return (

            <div draggable onDrag={this.onDrag} className="newsCard" name={fixedIdentifier}>
                <label>Título</label>
                <input name={fixedIdentifier} onChange={this.props.handleTitleChange} value={this.props.slide.title} />
                 <label>Subtítulo</label>
                <input name={fixedIdentifier} onChange={this.props.handleSubtitleChange} value={this.props.slide.subtitle} />
                <label>Texto</label>
                <textarea onDragOver={this.props.onDragOver} onDrop={this.props.onDrop} name={fixedIdentifier} onChange={this.props.handleTextChange} value={this.props.slide.text} />
                <button type="button" name={fixedIdentifier} onClick={this.props.handleImgChange}>Añadir Imagen</button>
                <div className="imageWrapperForm">
                    <img alt="preview" name={fixedIdentifier} className="previewImg" src={this.props.slide.image} />
                </div> 
            </div>

        )
    }
}