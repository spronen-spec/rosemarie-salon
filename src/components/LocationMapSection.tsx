const LocationMapSection = ({ className = "" }: { className?: string }) => {
  return (
    <section className={`w-full h-64 md:h-96 lg:h-auto ${className}`}>
      <iframe
        title="Rosemarie Beauty Centre location"
        src="https://maps.google.com/maps?q=25.0689553,55.1388336&z=17&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default LocationMapSection;
