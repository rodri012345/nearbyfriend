import {React, useState} from 'react'
import { uploadFile } from '../firebase/firebase-conf'
import {Avatar} from 'antd'
import { UserOutlined, UploadOutlined } from '@ant-design/icons'


  function SubirFotoAmigo({onUpload}) {
  const [file, setFile] = useState(null)
  const [result,setResult] = useState(null)
  
  
  

  const handleFileChange = async(e) => {
    e.preventDefault()
    const selectedFile = e.target.files[0]
    setFile(selectedFile)

    const reader = new FileReader();
    reader.onload = async () => {
      const base64String = reader.result
      setResult(base64String)
    }
    
    try {
      const res = await uploadFile(selectedFile)
      setResult(res)
      onUpload(res);
      console.log('imagen subida:',res)
    } catch (error) {
      console.error('error al subir imagen',error)
    }
    
    
  }

  

  return (
    <div>
      <Avatar  shape= 'square' size={300} icon={<UserOutlined />} src={result}  />
      
      <input type="file" name="" id="" onChange={handleFileChange}/>
      
    </div>
  )
}

export default SubirFotoAmigo

