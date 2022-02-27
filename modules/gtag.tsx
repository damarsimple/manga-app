export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID as string;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = async (url: URL) => {
  window &&
    window.gtag &&
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: url,
      page_path: url.pathname,
    });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
  description?: string;
  fatal?: boolean;
  name?: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = async ({
  action,
  category,
  label,
  value,
  description,
  fatal,
  name,
}: GTagEvent) => {
  window &&
    window.gtag &&
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
      description,
      fatal,
      name,
      // event_callback: () => {
      //   console.log(`event ${action} sent`);
      // },
    });
};
