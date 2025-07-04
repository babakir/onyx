import { useEffect, useMemo, useRef, useState } from "react";
import { IProduct } from "../../interfaces/productInterfaces";
import { Modal, ModalOptions } from "flowbite";
import ModelLayout from "../../../../../../../components/Layouts/ModelLayout";
import ProductInfoLayout from "../../layouts/ProductInfoLayout";
import BookNow from "../book";
import { useCurrentLocale, useScopedI18n } from "../../../../../../../locales/client";
import ProductTabContetnt from "./ProductTabContetnt";

interface IProp {
    product: IProduct | undefined;
    onClose: () => void;
}

const ProductDetailes = ({ product, onClose }: IProp) => {

    const locale = useCurrentLocale();
    const t = useScopedI18n('products.detaile');

    const [openBookingModal, setOpenBookingModal] = useState(false);

    const modalOptions: ModalOptions = useMemo(() => {
        return {
            placement: "bottom-right",
            backdrop: "dynamic",
            backdropClasses: "bg-quinary fixed inset-0 z-40",
            onHide() {
                onClose();
            },
        };
    }, [onClose]);

    const modalRef = useRef(null);
    const modal = useMemo<Modal | null>(() => {
        return product ? new Modal(modalRef.current, modalOptions) : null;
    }, [modalOptions, product]);

    useEffect(() => {
        if (product) (modal as Modal).show();
    }, [product, modal]);

    const openBookingModalHandler = () => {

        (modal as Modal).hide();
        setOpenBookingModal(true);

    }


    return (
        <>
            <ModelLayout reff={modalRef} onClose={() => modal?.hide()} title={product?.title[locale]} subTitle={product?.detailes.productCodes.code}>
                <div className="flex flex-col items-start gap-4 min-h-[70rem] md:min-h-fit">
                    <ProductInfoLayout title={t('analyze')} classList="justify-between ltr:flex-row-reverse">
                        {
                            product &&
                            Object.entries(product.detailes.productCodes.chemical).map(([key, value]) => (
                                <div key={key} className="flex flex-col gap-2 items-center text-sm leading-6 text-secondary">
                                    <span className="font-normal">{key}</span>
                                    <span className="font-bold md:text-base">{value}</span>
                                </div>
                            ))
                        }
                    </ProductInfoLayout>
                    <ProductInfoLayout title={t('attributes')} classList="gap-x-0 gap-y-2 flex-col lg:flex-row">
                        {
                            product &&
                            product.detailes.attributes.map((item, index) => (
                                <div key={index} className="flex flex-none w-full items-start text-sm font-normal leading-6 text-secondary md:text-base md:font-bold lg:w-1/2">
                                    <span>{index + 1}-</span>
                                    <span>{item[locale]}</span>
                                </div>
                            ))
                        }
                    </ProductInfoLayout>
                    <ProductInfoLayout title={t('uses')} classList="gap-x-0 gap-y-2 flex-col lg:flex-row">
                        {
                            product &&
                            product.detailes.uses.map((item, index) => (
                                <div key={index} className="flex flex-none w-full items-start text-sm font-normal leading-6 text-secondary md:text-base md:font-bold lg:w-1/2">
                                    <span>{index + 1}-</span>
                                    <span>{item[locale]}</span>
                                </div>
                            ))
                        }
                    </ProductInfoLayout>
                    {
                        product &&
                        <ProductTabContetnt productCodes={product.detailes.productCodes} />
                        // <ProductTabs productCodes={product.detailes.productCodes} />
                    }

                    <button onClick={() => openBookingModalHandler()} className="w-full bg-tertiary text-white py-3 px-14 text-sm mb-4">{t('bookNow')}</button>

                </div>
            </ModelLayout>

            <BookNow openModal={openBookingModal} onClose={() => setOpenBookingModal(false)} />
        </>
    );
}

export default ProductDetailes;