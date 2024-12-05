export const submitEvent = (state, oldPosters = [], oldBanners = [], button) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;
  const banners = state?.banner?.length
    ? state.banner?.map((i) => i.id).filter((i) => !oldBanners?.includes(i))
    : null;
    console.log("banner:",banners);
  const sH = state?.fromTime?.getHours() || 0;
  const sT = state?.fromTime?.getMinutes() || 0;

  const fromD = new Date(state?.fromDate).setHours(sH, sT, 0);

  const toD = new Date(state?.toDate).setHours(
    state?.toTime?.getHours() || 0,
    state?.toTime?.getMinutes() || 0,
    0
  );
  const payload = {
    data: {
      title: state.title,
      description: state.description,
      from: new Date(fromD),
      to: new Date(toD),
      place: state.venue,
      websites: state.website,
      website: state.website,
      contacts: state.phone,
      email: state.emailId,
      address: state.address,
      event_category: state.categories,
      city: state.city,
      area_1: state.area,
      zipcode: state.pincode,
      latitude: state.latitude,
      longitude: state.longitude,
      status: "",
      place: state.place,
      state: state.state,
      area_1: state.area_1,
      area_2: state.area_2,
      area_3: state.area_3,
      locationLink: state.mapLocation,
      featured: state.featured,
      other_category: state.otherCategories,
      locationLink: state.mapLocation,
    },
  };
  if (poster?.length > 0 && button) {
    payload.poster = poster;
  }
  if (banners?.length > 0 && button) {
    oldBanners=[]
    payload.banners = banners;
  }
  return payload;
};

export const getLearningsPayload = (
  state,
  oldPosters = [],
  oldBanners = [],
  button
) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;
  const banners = state?.banner?.length
    ? state.banner?.map((i) => i.id).filter((i) => !oldBanners?.includes(i))
    : null;

  const sH = state?.fromTime?.getHours() || 0;
  const sT = state?.fromTime?.getMinutes() || 0;

  const fromD = new Date(state?.fromDate).setHours(sH, sT, 0);

  const toD = new Date(state?.toDate).setHours(
    state?.toTime?.getHours() || 0,
    state?.toTime?.getMinutes() || 0,
    0
  );
  const payload = {
    data: {
      title: state.title,
      description: state.description,
      from: fromD,
      to: toD,

      websites: state.website,
      contacts: state.contact,
      contact_number: state.contact,
      email: state.emailId,
      address: state.address,
      learning_category: state.categories,
      city: state.city,
      area_1: state.area,
      zipcode: state.pincode,
      latitude: state.latitude,
      longitude: state.longitude,
      status: "",
      state: state.state,
      area_1: state.area_1,
      area_2: state.area_2,
      area_3: state.area_3,
      locationLink: state.mapLocation,
      min_age: state?.minAge,
      max_age: state?.maxAge,
      price: state?.fee,
      age_category: state.sessionFor,
      mode_of_session: [state.modeOfSession],
      other_category: state?.otherCategories,
      batch: state?.batch,
      tutor_by: state?.tutor_by,
      featured: state?.featured,
    },
  };
  if (poster?.length > 0 && button) {
    payload.poster = poster;
  }
  if (banners?.length > 0 && button) {
    payload.banners = banners;
  }
  return payload;
};

export const getMallsPayload = (state, oldPoster) => {
  let op = oldPoster?.map((i) => i?.id) || [];
  const payload = {
    data: {
      name: state.title,
      description: state.description,
      address: state.address,
      city: state.city,
      zipcode: state.pincode,
      locationLink: state.mapLink,
      latitude: state.latitude,
      longitude: state.longitude,
      featured: state.featured,
      area_1: state.area_1,
      area_2: state.area_2,
      area_3: state.area_3,
      state: state.state,
      contact_number: state.phone,
      websites: state.website,
    },
  };
  if (
    state.poster &&
    state.poster[0] &&
    state.poster.length > 0 &&
    !op.includes(state.poster[0]?.id)
  ) {
    payload.poster = [state.poster[0]?.id];
  }

  return payload;
};
export const getStorePayload = (state, mallId, oldlist, oldPosters) => {
  const catsId = state.categories;
  const poster = state.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;

  const newCats = catsId?.filter((i) => {
    if (!oldlist || oldlist.legnth < 1) return true;
    if (oldlist.includes(i)) {
      return false;
    } else {
      return true;
    }
  });
  const delCats = oldlist.filter((i) => {
    if (!catsId || catsId?.length < 1) return true;

    if (catsId?.includes(i)) {
      return false;
    } else {
      return true;
    }
  });

  const payload = {
    data: {
      name: state.title,
      description: state.description,
      mall_id: mallId,
      floor_name: state.floorName,
      floor_no: state.floorNo,
      shop_no: state.shopNo,
      contact_number: state.phone,
      email: state.emailId,
      websites: state.website,
      featured: state.featured,
    },
    //poster: state?.poster?.map((i) => i.id),
    shop_category: { new: newCats, del: delCats },
  };
  if (poster?.length > 0) {
    payload.poster = poster;
  }

  return payload;
};

export const getMallOfferPayload = (state, mallId, oldPosters, oldBanners) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;
  const banners = state?.banner?.length
    ? state.banner?.map((i) => i.id).filter((i) => !oldBanners?.includes(i))
    : null;

  const sH = state?.fromTime?.getHours() || 0;
  const sT = state?.fromTime?.getMinutes() || 0;

  const fromD = new Date(state?.fromDate).setHours(sH, sT, 0);

  const toD = new Date(state?.toDate).setHours(
    state?.toTime?.getHours() || 0,
    state?.toTime?.getMinutes() || 0,
    0
  );
  const payload = {
    data: {
      name: state.title,
      description: state.description,
      valid_to: fromD,
      valid_from: toD,
      featured: false,
      mall_id: mallId,

      offer_category: state.categories,
    },
    //poster: state?.poster?.map((i) => i?.id),
    //banners: state?.banner?.map((i) => i.id),
  };
  if (poster?.length > 0) {
    payload.poster = poster;
  }
  if (banners?.length > 0) {
    payload.banners = banners;
  }
  return payload;
};


export const getPromotionsPayload = (state, oldPosters, oldBanners, button) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;
  const banners = state?.banner?.length
    ? state.banner?.map((i) => i.id).filter((i) => !oldBanners?.includes(i))
    : null;

  const sH = state?.fromTime?.getHours() || 0;
  const sT = state?.fromTime?.getMinutes() || 0;

  const fromD = new Date(state?.fromDate).setHours(sH, sT, 0);

  const toD = new Date(state?.toDate).setHours(
    state?.toTime?.getHours() || 0,
    state?.toTime?.getMinutes() || 0,
    0
  );
  const payload = {
    data: {
      name: state.title,
      description: state.description,
      valid_to: toD,
      valid_from: fromD,
      address: state.address,
      city: state.city,
      zipcode: state.pincode,
      locationLink: state?.mapLocation,
      latitude: state?.latitude,
      longitude: state?.longitude,
      featured: state?.featured,
      area_1: state.area_1,
      area_2: state.area_2,
      area_3: state.area_3,
      state: state.state,
      contact_number: state.phone,
      website: state.website,
      offer_category: state.categories,
      other_category: state.otherCategories,
      cracker_id: state.crackers,
      cracker_category_id: state.crackersCategory,
      cracker_type_id: state.crackersType,
      quantity: state.quantity,
      price:state.price,
      product_code:state.product_code,

    },
    //poster: state?.poster?.map((i) => i?.id),
    //banners: state?.banner?.map((i) => i.id),
  };
  if (poster?.length > 0 &&button) {
    payload.poster = poster;
  }
  if (banners?.length > 0 &&button) {
    payload.banners = banners;
  }
  return payload;
};


export const getCrackersPayload = (state, oldPosters, oldBanners, button) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;
  const banners = state?.banner?.length
    ? state.banner?.map((i) => i.id).filter((i) => !oldBanners?.includes(i))
    : null;

  const sH = state?.fromTime?.getHours() || 0;
  const sT = state?.fromTime?.getMinutes() || 0;

  const fromD = new Date(state?.fromDate).setHours(sH, sT, 0);

  const toD = new Date(state?.toDate).setHours(
    state?.toTime?.getHours() || 0,
    state?.toTime?.getMinutes() || 0,
    0
  );
  const payload = {
    data: {
      name: state.title,
      description: state.description,
      valid_to: toD,
      valid_from: fromD,
      address: state.address,
      city: state.city,
      zipcode: state.pincode,
      locationLink: state?.mapLocation,
      latitude: state?.latitude,
      longitude: state?.longitude,
      featured: state?.featured,
      area_1: state.area_1,
      area_2: state.area_2,
      area_3: state.area_3,
      state: state.state,
      contact_number: state.phone,
      website: state.website,
      offer_category: state.categories,
      other_category: state.otherCategories,
      cracker_id: state.crackers,
      cracker_category_id: state.crackersCategory,
      cracker_type_id: state.crackersType,
      quantity: state.quantity,
      price:state.price,
      product_code:state.product_code,

    },
    //poster: state?.poster?.map((i) => i?.id),
    //banners: state?.banner?.map((i) => i.id),
  };
  if (poster?.length > 0 &&button) {
    payload.poster = poster;
  }
  if (banners?.length > 0 &&button) {
    payload.banners = banners;
  }
  return payload;
};


export const getPropertyPayload = (
  state,
  oldPosters,
  oldBanners,
  oldlist,
  oldSpeci,
  oldAmmen,
  oldFloor,
  oldBrochure,
  button
) => {
  //to give payload foe multiple selection
  const catsId = state.categories;

  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;
  const banners = state?.banner?.length
    ? state.banner?.map((i) => i.id).filter((i) => !oldBanners?.includes(i))
    : null;

  const specificationImages = state?.specificationImage?.length
    ? state.specificationImage
        ?.map((i) => i.id)
        .filter((i) => !oldSpeci?.includes(i))
    : null;
  const amenitiesImages = state?.amenitiesImage?.length
    ? state.amenitiesImage
        ?.map((i) => i.id)
        .filter((i) => !oldAmmen?.includes(i))
    : null;
  const floorplanImages = state?.floorplanImage?.length
    ? state.floorplanImage
        ?.map((i) => i.id)
        .filter((i) => !oldFloor?.includes(i))
    : null;
  const brochure = state?.brochure?.length
    ? state.brochure?.map((i) => i.id).filter((i) => !oldBrochure?.includes(i))
    : null;

  const newCats = catsId?.filter((i) => {
    if (!oldlist || oldlist.legnth < 1) return true;
    if (oldlist.includes(i)) {
      return false;
    } else {
      return true;
    }
  });
  const delCats = oldlist?.filter((i) => {
    if (!catsId || catsId?.length < 1) return true;

    if (catsId?.includes(i)) {
      return false;
    } else {
      return true;
    }
  });

  const payload = {
    data: {
      name: state.title,
      description: state.description,
      address: state.address,
      city: state.city,
      zipcode: state.pincode,
      locationLink: state?.mapLocation,
      latitude: state?.latitude,
      longitude: state?.longitude,
      featured: state?.featured,
      area_1: state.area_1,
      area_2: state.area_2,
      area_3: state.area_3,
      state: state.state,
      contact_number: state.contact,
      website: state.website,
      websites: state.website,
      mail_id: state.emailId,
      locationLink: state.mapLocation,
      property_size_text: state.propertySize,
      /* amenities_images: state.amenitiesImage || "10", */
      floor_plan_images: "not provided yet" || state.floorplanImage,
      floor_plan: state.floorplan,
      specification_images: "not provided" || state.specificationImage,
      specifications: state.specification,
      min_build_up_area: state.minBuiltUpArea,
      max_build_up_area: state.maxBuiltUpArea,
      stage_of_project: state.stageOfProject,
      max_bedrooms: state.maxBedroom,
      min_bedrooms: state.minBedroom,
      builder_profile: "builders" || state.builderProfile,
      possession: state.possesionDate,
      property_areas: "propertyarea",
      amenities: state.amenities,
      total_number_of_houses: state.noOfHouses,
      price_from: state.priceFrom,
      price_to: state.priceTo,
      builder_profile: state?.builder,
    },
    //brochure: [state.brochure.id],
  };
  if(oldlist?.length >=0 &&button){
    payload.property_type={ new: newCats || [], del: delCats || [] }
  }
  if (poster?.length > 0 &&button) {
    payload.poster = poster;
  }
  if (banners?.length > 0 &&button) {
    payload.banners = banners;
  }
  if (specificationImages?.length > 0 &&button) {
    payload.specificationImages = specificationImages;
  }
  if (amenitiesImages?.length > 0 &&button) {
    payload.amenitiesImages = amenitiesImages;
  }
  if (floorplanImages?.length > 0 &&button) {
    payload.floorPlan = floorplanImages;
  }
  if (brochure?.length > 0 &&button) {
    payload.brochure = brochure;
  }
  return payload;
};

export const getHelplinePayload = (state, oldPosters) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;

  let payload = {
    data: { name: state.name, contact_no: state.contact },
  };
  if (poster?.length > 0) {
    payload.logo = poster;
    payload.display_pic = poster;
  }
  return payload;
};

export const getEducationPayload = (
  state,
  oldPosters,
  oldBanners,
  oldlist,
  oldBroucher,
  oldVideo,
  button
) => {
  const catsId = state.categories;
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;

  const banners = state?.banner?.length
    ? state.banner?.map((i) => i.id).filter((i) => !oldBanners?.includes(i))
    : null;

  const broucher = state?.brochure?.length
    ? state?.brochure?.map((i) => i.id).filter((i) => !oldBroucher.includes(i))
    : null;

  const video = state?.video?.length
    ? state?.video?.map((i) => i.id).filter((i) => !oldVideo.includes(i))
    : null;

  const newCats = catsId?.filter((i) => {
    if (!oldlist || oldlist.legnth < 1) return true;
    if (oldlist.includes(i)) {
      return false;
    } else {
      return true;
    }
  });
  const delCats = oldlist?.filter((i) => {
    if (!catsId || catsId?.length < 1) return true;

    if (catsId?.includes(i)) {
      return false;
    } else {
      return true;
    }
  });

  let payload = {
    data: {
      name: state?.title,
      college_name: state?.title,
      teaching_method: state?.teachingMethod,
      details: state?.description,
      description: state?.description,
      class_offered: state?.classesOffered,
      gender: [state?.gender],
      languages: state?.languages,
      facilities: state?.facilities,
      admission: state?.admission,
      year_of_establishment: state?.yearOfEstablishment,
      establishment: state?.yearOfEstablishment,
      contact_number: state?.contact,
      website_link: state?.website,
      map_location: state?.mapLocation,
      email: state?.emailId,
      address: state?.address,
      city: state?.city,
      area_1: state?.area_1,
      area_2: state?.area_2,
      area_3: state?.area_3,
      state: state?.state,
      zipcode: state?.pincode,
      latitude: state?.latitude,
      longitude: state?.longitude,
      featured: state?.featured,
      admission: state?.addmission,
      affiliation: state?.affiliation,
      placement: state?.placements,
      certificates: state?.certificates,
      rank: state?.rank,
      courses: state.courses,
      institue_type: state?.instituteType,
      map_location: state?.mapLocation,
      counselling_code: state.counsellingCode,
      video_url: state?.videoUrl,
    },
    school_board: { new: newCats || [], del: delCats || [] },
    college_category: { new: newCats || [], del: delCats || [] },
  };
  if (poster?.length > 0 &&button) {
    payload.poster = poster;
    payload.logo = poster;
  }
  if (banners?.length > 0 &&button) {
    payload.banners = banners;
  }
  if (broucher?.length > 0) {
    payload.brochure = broucher;
  }
  if (video?.length > 0) {
    payload.video = video;
  }
  return payload;
};

export const getHospitalsPayload = (state, oldPosters) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;

  let payload = {
    data: {
      name: state.name,
      general_contacts: state?.generalContact,
      emergency_Contacts: state?.emergencyContact,
      address: state?.address,
      featured: state?.featured,
      state: state?.state,
      city: state?.city,
      latitude: state?.latitude,
      longitude: state?.longitude,
      zipcode: state?.pincode,
      websites: state?.website,
      area_1: state?.area_1,
      area_2: state?.area_2,
      area_3: state?.area_3,
    },
  };
  if (poster?.length > 0) {
    payload.logo = poster;
  }
  return payload;
};

export const getBuilderProfilePayload = (state, oldPosters) => {
  const poster = state?.poster?.length
    ? state.poster?.map((i) => i?.id).filter((i) => !oldPosters?.includes(i))
    : null;

  let payload = {
    data: { full_name: state.name, description: state.description },
  };
  if (poster?.length > 0) {
    payload.displayPic = poster;
  }
  return payload;
};
