import React , {useState}from 'react'
import { Typography,Button,Form,message,Input,Icon  } from 'antd';
const { Title } = Typography;
const { TextArea } = Input;
const Genre = [
    {key:1, value: " Basic Science"},
    {key:2, value: " Fiction"},
    {key:1, value: " Arts"},
    {key:1, value: " Biography"},
    {key:1, value: " Technology"}
]
function UploadLibraryPage() {
    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [GenreValue, setGenreValue] = useState(1)
    const OnTitleChange=(event) => {
        setTitleValue(event.currentTarget.value)
    }
    const OnDescriptionChange=(event) =>{
        setDescriptionValue(event.currentTarget.value)
    }
    const onGenresSelectChange=() =>{
        setGenreValue(event.currentTarget.value)
    }
    return (
        <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
            <br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br />
            <div style={{ textAlign:'center', marginBottom:'2rem' }}>
                <Title level={2}> Upload Library Book</Title>
            </div>
            <Form onSubmit>
                {/* Dropzone */}

                <br />
                <br />
                <br />
                
                <label>Title</label>
                <Input
                    onChange={OnTitleChange}
                    value={TitleValue}
                />
                
                <br />
                <br />
                <label>Description</label>
                <Textarea
                    onChange={OnDescriptionChange}
                    value={DescriptionValue}
                />
                <select onChange={onGenresSelectChange}>
                    {Genre.map(item=>(
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                
                <Button 
                    
                    >
                        Submit
                    </Button>

            </Form>
        </div>
        
    )
}

export default UploadLibraryPage
