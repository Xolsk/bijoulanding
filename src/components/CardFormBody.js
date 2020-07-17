import React from "react"

export default class CardFormBody extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            _id: this.props.slide._id,
            id: this.props.slide.id,
            image: this.props.slide.image,
            title: this.props.slide.title,
            subtitle: this.props.slide.subtitle,
            text: this.props.slide.text,

        }

        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    handleImgChange(event) {

        let newImage = undefined;
        const activeSlide = event.target.name;

        window.cloudinary.openUploadWidget({
            cloud_name: 'lebijoubcn',
            upload_preset: 'kreznlvo',
            tags: ['web'],
        },
            (error, result) => {
                if (error) {
                    console.log(error);
                } else {
                    if (result.info.secure_url !== undefined) {
                        newImage = result.info.secure_url;
                        this.setState({
                            image: newImage
                        }, () => { this.props.setFormData(this.state, activeSlide) })

                    }
                }
            })

    }


    onDrop = (event) => {

        event.preventDefault();
        event.stopPropagation();
        const newData = this.props.getDraggedCard();
       let  receiverCard = Object.assign({}, this.state)

        this.setState({
            _id: newData._id,
            text: newData.text,
            title: newData.title,
            subtitle: newData.subtitle,
            image: newData.image
        }, () => { this.props.onDropParentData(receiverCard) })

    }

    handleTitleChange(event) {

        const newValue = event.target.value;
        const activeSlide = event.target.name
        this.setState({
            title: newValue
        }, () => { this.props.setFormData(this.state, activeSlide) });
        ;

    }

    handleSubtitleChange(event) {
        const newValue = event.target.value;
        const activeSlide = event.target.name
        this.setState({
            subtitle: newValue
        }, () => { this.props.setFormData(this.state, activeSlide) });
        ;


    }

    handleTextChange(event) {
        const newValue = event.target.value;
        if (newValue.length > 550) {
            alert("No se permiten textos de más de 550 espacios");
            return;
        }
        const activeSlide = event.target.name
        this.setState({
            text: newValue
        }, () => { this.props.setFormData(this.state, activeSlide) });
        ;


    }





    render() {


        return (

            <div draggable onDrag={(event) => { this.props.onDrag(event, this.state) }} className="newsCard" name={this.state.id}>
                <label>Título</label>
                <input name={this.state.id} onChange={this.handleTitleChange} value={this.props.slide.title} />
                <label>Subtítulo</label>
                <input name={this.state.id} onChange={this.handleSubtitleChange} value={this.state.subtitle} />
                <label>Texto</label>
                <textarea onDragOver={this.props.onDragOver} onDrop={this.onDrop} name={this.state.id} onChange={this.handleTextChange} value={this.state.text} />
                <button type="button" name={this.state.id} onClick={this.handleImgChange}>Añadir Imagen</button>
                <div className="imageWrapperForm">
                    <img alt="preview" name={this.state.id} className="previewImg" src={this.state.image} />
                </div>
            </div>

        )
    }
}