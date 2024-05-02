"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CircleX, ZoomIn, ZoomOut } from "lucide-react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";
import { Button } from "../ui/button";

interface ImageZoomProps {
	image: ImageProps;
}

const maxZoom = 2;
const minZoom = 1;
const zoomStep = 0.1;

export function ImageZoom({ image }: ImageZoomProps) {
	const [open, setOpen] = useState(false);
	const [zoom, setZoom] = useState(minZoom);

	function handleClose() {
		setOpen(false);
	}

	function handleZoomIn() {
		setZoom(prev => (prev + zoomStep > maxZoom ? maxZoom : prev + zoomStep));
	}

	function handleZoomOut() {
		setZoom(prev => (prev - zoomStep < minZoom ? minZoom : prev - zoomStep));
	}

	const children = <Image {...image} alt={image.alt} draggable={false} />;

	return (
		<Dialog open={open} onOpenChange={setOpen} modal>
			<DialogTrigger asChild className="cursor-zoom-in">
				{children}
			</DialogTrigger>
			<DialogContent
				className="flex h-full !w-full max-w-full flex-col overflow-y-auto overflow-x-hidden border-0 !bg-transparent p-0"
				hideCloseButton>
				<header className="sticky top-4 z-10 m-4 flex h-fit flex-row justify-end gap-2">
					<Button
						size={"icon"}
						variant={"outline"}
						onClick={handleZoomIn}
						disabled={zoom === maxZoom}>
						<ZoomIn />
					</Button>
					<Button
						size={"icon"}
						variant={"outline"}
						onClick={handleZoomOut}
						disabled={zoom === minZoom}>
						<ZoomOut />
					</Button>
					<Button size={"icon"} variant={"outline"} onClick={handleClose}>
						<CircleX />
					</Button>
				</header>
				<main
					className="relative flex flex-1 items-center justify-center pb-4"
					onClick={handleClose}>
					<Draggable>
						<span
							style={{ scale: zoom }}
							className="cursor-move transition-[scale]"
							onClick={e => e.stopPropagation()}>
							{children}
						</span>
					</Draggable>
				</main>
			</DialogContent>
		</Dialog>
	);
}
