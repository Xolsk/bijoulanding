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
        this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
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
        const activeSlide = event.target.name
        this.setState({
            text: newValue
        }, () => { this.props.setFormData(this.state, activeSlide) });
        ;


    }

    render() {


        return (

            <div className="newsCard" id={this.props.slide.id} name={this.props.slide.id}>
                <label>Título</label>
                <input name={this.props.slide.id} onChange={this.handleTitleChange} defaultValue={this.state.title} />
                <label>Subtítulo</label>
                <input name={this.props.slide.id} onChange={this.handleSubtitleChange} defaultValue={this.state.subtitle} />
                <label>Texto</label>
                <textarea name={this.props.slide.id} onChange={this.handleTextChange} value={this.state.text} />
                <button type="button"  name={this.props.slide.id} onClick={this.handleImgChange}>Añadir Imagen</button>
                <div className="imageWrapperForm">
                    <img  alt="preview" name={this.props.slide.id} className="previewImg" src={this.state.image} />
                </div>

            </div>
        )
    }
}