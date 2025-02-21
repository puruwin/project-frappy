interface EventParams {
  [key: string]: string | number | boolean;
}

export const trackEvent = (eventName: string, params: EventParams = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'ga4_event',
      event_name: eventName,
      ...params
    });
  }
};

export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation
  });
};

export const trackFormSubmit = (formName: string, formStatus: 'success' | 'error') => {
  trackEvent('form_submit', {
    form_name: formName,
    form_status: formStatus
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName
  });
}; 