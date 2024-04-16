import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';
import { firestoreDB } from "@/config/firebase.config";
import { collection, addDoc } from "firebase/firestore";

const formRules = yup.object().shape({
    name: yup.string().required('This field is mandatory').min(3, 'Minimum of 3 character required').max(100, 'Maximum of 10 characters'),
    message:yup.string().required('This field is mandatory').min(16, 'Minimum of 16 character required').max(10000, 'Maximum of 10000 characters'),
    phone:yup.number().required('Add Phone Number').min(100),
    date:yup.string().required(),
    email:yup.string().required('Add Email Address').min(12, 'minimum of 12 character required').max(20, 'maximum of 20 character required'),

});

export default function CreateAccount() {
    const { data: session } = useSession();
    // const [selectedFile, setSelectedFile] = useState(null);

    const addImageToPost = (e) => {
        const reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = readerEvent => {
            setSelectedFile(readerEvent.target.result);
        }
    }

    const bookAppointment = async () => {
        const docRef = await addDoc(collection(firestoreDB, 'products'), {
            name: values.name,
            message: values.message,
            phone: values.phone,
            date: values.date,
            email: values.email,
            createdAt: new Date().getTime(),
            bookedBy: session.uid,
        });

        // const imageRef = ref(storage, `products/${docRef.id}/image`);

        // if (selectedFile) {
        //     await uploadString(imageRef, selectedFile, "data_url")
        //         .then(async () => {
        //             const downloadURL = await getDownloadURL(imageRef);
        //             await updateDoc(doc(firestoreDB, 'products', docRef.id), {
        //                 coverImage: downloadURL
        //             });
        //         });
        // } else {

        // }
    }


    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: { name: "", message: "", phone: "", date:"", email: "" },
        onSubmit: () => {
            bookAppointment();

        },
        validationSchema: formRules
    });
    return (
        <>
            <Head>
                <title>Irun Admin | Book Appointment</title>
            </Head>
            <main className="h-screen flex justify-center bg-gray-300 py-4 md:py-8">
                <div className="w-full md:w-[400px] px-2 md:px-4 py-2 md:py-4 bg-gray-200 rounded-md">
                    <h1 className="text-2xl text-amber-900 font-bold">Book an Appointment</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="text-red-800 text-sm">Name</label>
                            <TextField
                                placeholder="Enter your Name"
                                className="md:w-full"
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.name && errors.name
                                ? <span className="text-red-500 text-xs">{errors.name}</span>
                                : null}
                        </div>


                        <div className="mb-2">
                            <label className="text-red-800 text-sm">Phone</label>
                            <TextField
                                placeholder="Enter your phone(e.g.+23481429372)"
                                className="md:w-full"
                                id="phone"
                                type="number"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.phone && errors.phone
                                ? <span className="text-red-500 text-xs">{errors.phone}</span>
                                : null}
                        </div>

                        

                        <div className="mb-2">
                            <label className="text-orange-800 text-sm">Appointment Date</label>
                            <TextField
                                input="date"
                                className="md:w-full"
                                id="date"
                                type="datetime-local"
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.date && errors.date
                                ? <span className="text-red-500 text-xs">{errors.date}</span>
                                : null}
                        </div>

                        <div className="mb-2">
                            <label className="text-red-800 text-sm">Email Address</label>
                            <TextField
                                input="email"
                                className="md:w-full"
                                id="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.email && errors.email
                                ? <span className="text-red-500 text-xs">{errors.email}</span>
                                : null}
                        </div>





                        <div className="mb-2">
                            <label className="text-red-800 text-sm">Leave a Message</label>
                            <TextField
                                placeholder="Enter your Message"
                                className="md:w-full"
                                id="message"
                                multiline={true}
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.message && errors.message
                                ? <span className="text-red-500 text-xs">{errors.message}</span>
                                : null}
                        </div>

                        <Button variant="contained"
                            color="secondary"
                            className="bg-amber-950 rounded-es-full "
                            type="submit"
                        >Book Now</Button>
                    </form>
                </div>
            </main>
        </>
    )
}
export async function getServerSideProps (context) {
    const session = await getServerSession(context.req,context.res,authOptions);
    // if (session) {
    //     if (session.user_data?.accountType == 'admin') {
    //         return {redirect:{destination:'/admin/create-product',permanent:false}}
    //     } 
    //     else if (session.user_data?.accountType == 'buyer') {
    //         return {redirect:{destination:'/',permanent:false}}
    //     } 
    // } else {
    //     return {redirect:{destination:'/auth/signin',permanent:false}}
    // }
    return {
        props:{
            session:JSON.parse(JSON.stringify(session))
        }
    }
}