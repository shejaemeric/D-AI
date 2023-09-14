import React, { useState } from "react";
import { Grid } from "@mui/material";
import KCTitle from "../reusable/KCTitle";
import KCInput from "../reusable/form/KCInput";
import KCSelect from "../reusable/form/KCSelect";
import countries from "../../utilities/countries";

import KCButton from "../reusable/form/KCButton";
import { validateContactForm } from "../../validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const theme = useTheme();
  const [country, setCountry] = useState();

  const {
    register,
    control,
    handleSubmit,
    resetField,
    getValues,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateContactForm),
  });

  const handleChangeCountry = (selected) => {
    setCountry(selected);
    setValue("country", selected?.label ?? "");
    if (selected) clearErrors("country");
  };

  const sendEmail = (e) => {
    const email = {
      name: getValues("name"),
      subject: getValues("subject"),
      inquiry: getValues("inquiry"),
      country: getValues("country"),
    };
    emailjs
      .send("service_70d0mtq", "template_zjhkojh", email, "-XtJBz2fEZE1YiCzm")
      .then(
        (result) => {
          toast.success("Email sent successfully");
          resetField("name");
          resetField("country");
          resetField("email");
          resetField("subject");
          resetField("inquiry");
          setCountry("");
        },
        (error) => {
          toast.error(error + "An error occured while sending email");
        }
      );
  };

  return (
    <Grid id="contact">
      <KCTitle
        subtitle="CONTACT US"
        prefix="Our team "
        title="is available 24/7 to help
you with any inquiries"
      />
      <Grid
        container
        justifyContent="space-between"
        px={[5, 5, 12]}
        py={5}
        alignItems="flex-end"
        rowGap={2}
      >
        <Grid item xs={12} md={5}>
          <KCInput
            labelField="Name"
            placeholder="Your name"
            control={control}
            {...register("name")}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : null}
          ></KCInput>
        </Grid>
        <Grid item xs={12} md={5}>
          <KCInput
            labelField="Email"
            placeholder="Example@gmail.com"
            control={control}
            {...register("email")}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
          ></KCInput>
        </Grid>
        <Grid item xs={12} md={5}>
          <KCInput
            labelField="Subject"
            placeholder="Inquiry subject"
            control={control}
            {...register("subject")}
            error={errors.subject ? true : false}
            helperText={errors.subject ? errors.subject.message : null}
          ></KCInput>
        </Grid>

        <Grid item xs={12} md={5}>
          <KCSelect
            label="Country"
            placeholder="Enter country"
            options={countries}
            onChange={handleChangeCountry}
            borderColor={
              errors.country
                ? theme.palette.error.main
                : theme.palette.secondary.main
            }
            value={country}
          ></KCSelect>
        </Grid>
        <Grid item xs={12} md={12}>
          <KCInput
            labelField="How can we help?"
            placeholder="Add your inquiry"
            multiline
            rows={3}
            height={150}
            control={control}
            {...register("inquiry")}
            error={errors.inquiry ? true : false}
            helperText={errors.inquiry ? errors.inquiry.message : null}
          ></KCInput>
        </Grid>
        <Grid item xs={12} md={2} mt={5} mx="auto">
          <KCButton width="100%" onClick={handleSubmit(sendEmail)}>
            Submit
          </KCButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
