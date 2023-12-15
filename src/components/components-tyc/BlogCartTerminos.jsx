'use client'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function BackgroundBlogCard(props) {
  return (
    <Card
      shadow={false}
      className="transition transform ease-out duration-700 hover:-translate-y-12 motion-reduce:transition-none motion-reduce:transform-none relative grid h-[60rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center shadow-3xl"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12 lg:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {props.name}          
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {props.description}          </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src={props.avatarimage} />
      </CardBody>
    </Card>
  );
}

export default BackgroundBlogCard