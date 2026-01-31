import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Upload, Check } from 'lucide-react';
import { Card } from '../components/Card';
import { Input, Select } from '../components/Input';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';

const steps = [
  { id: 1, title: 'Collection Info' },
  { id: 2, title: 'Purchase Details' },
  { id: 3, title: 'Upload Images' },
];

export const CreateCollection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: 'UK Stamp',
    description: '',
    region: '',
    type: '',
    country: '',
    catalogue: 'Stanley Gibbons',
    catalogueNumber: '3r4',
    condition: 'Mint Never Hinged',
    classification: 'Small Collection',
    theme: '',
    certified: true,
    certificationBody: '',
    purchasePrice: '20.00',
    valuation: '',
    purchaseDate: '',
    sellerName: '',
    receiptNumber: '',
    paymentMethod: '',
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pb-24 px-6 max-w-2xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 mb-6 flex items-center gap-4"
      >
        <IconButton
          icon={<ArrowLeft size={24} />}
          label="Back"
          onClick={() => window.history.back()}
        />
        <h1 className="text-2xl font-bold text-text-primary">
          Create New Collection
        </h1>
      </motion.div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1">
                <motion.div
                  animate={{
                    scale: currentStep === step.id ? 1.1 : 1,
                    backgroundColor:
                      currentStep >= step.id ? '#6B3410' : '#E8D5C7',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2"
                >
                  {currentStep > step.id ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <Check size={20} />
                    </motion.div>
                  ) : (
                    step.id
                  )}
                </motion.div>
                <span
                  className={`text-xs font-medium ${
                    currentStep >= step.id
                      ? 'text-primary-600'
                      : 'text-text-tertiary'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-2 mb-6 bg-primary-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{
                      width: currentStep > step.id ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-primary-600"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Form Content */}
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold text-accent-600 mb-4 flex items-center gap-2">
                  <span>Collection Info</span>
                  <span className="text-error">*</span>
                </h3>

                <div className="space-y-4">
                  <Input
                    label="Title of Collection"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="UK Stamp"
                  />

                  <Input
                    label="Brief Description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="tell about it"
                  />
                </div>
              </motion.div>
            </Card>

            <Card className="p-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-bold text-accent-600 mb-4 flex items-center gap-2">
                  <span>Country of Origin</span>
                  <span className="text-error">*</span>
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Select
                    label="Select Region"
                    value={formData.region}
                    onChange={(e) =>
                      setFormData({ ...formData, region: e.target.value })
                    }
                  >
                    <option value="">Select Region</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="americas">Americas</option>
                  </Select>

                  <Select
                    label="Type"
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option value="">Select Type</option>
                    <option value="commemorative">Commemorative</option>
                    <option value="definitive">Definitive</option>
                  </Select>
                </div>

                <Select
                  label="Country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                >
                  <option value="">Select Country</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="france">France</option>
                </Select>
              </motion.div>
            </Card>

            <Card className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-accent-600 mb-4">
                  Catalogue Details
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Select
                    label="Catalogue"
                    value={formData.catalogue}
                    onChange={(e) =>
                      setFormData({ ...formData, catalogue: e.target.value })
                    }
                  >
                    <option value="Stanley Gibbons">Stanley Gibbons</option>
                    <option value="Scott">Scott</option>
                    <option value="Michel">Michel</option>
                  </Select>

                  <Input
                    label="Catalogue Number"
                    value={formData.catalogueNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        catalogueNumber: e.target.value,
                      })
                    }
                    placeholder="3r4"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Select
                    label="Condition"
                    value={formData.condition}
                    onChange={(e) =>
                      setFormData({ ...formData, condition: e.target.value })
                    }
                  >
                    <option value="Mint Never Hinged">Mint Never Hinged</option>
                    <option value="Mint">Mint</option>
                    <option value="Used">Used</option>
                  </Select>

                  <Select
                    label="Type Classification"
                    value={formData.classification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        classification: e.target.value,
                      })
                    }
                  >
                    <option value="Small Collection">Small Collection</option>
                    <option value="Large Collection">Large Collection</option>
                  </Select>
                </div>

                <Input
                  label="Theme"
                  value={formData.theme}
                  onChange={(e) =>
                    setFormData({ ...formData, theme: e.target.value })
                  }
                  placeholder="e.g., Animal, history, Sports.. (max 80 characters)"
                />

                <div className="mt-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <input
                        type="checkbox"
                        checked={formData.certified}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            certified: e.target.checked,
                          })
                        }
                        className="w-6 h-6 rounded border-2 border-primary-300 checked:bg-primary-600 checked:border-primary-600 transition-colors"
                      />
                      {formData.certified && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center text-white pointer-events-none"
                        >
                          <Check size={16} />
                        </motion.div>
                      )}
                    </motion.div>
                    <span className="text-text-primary font-medium group-hover:text-primary-600 transition-colors">
                      The item(s) in this collection is(are) certified
                    </span>
                  </label>
                </div>

                {formData.certified && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <Select
                      label="Certification Body"
                      value={formData.certificationBody}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          certificationBody: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Certification Body</option>
                      <option value="PSE">PSE</option>
                      <option value="APS">APS</option>
                    </Select>
                  </motion.div>
                )}
              </motion.div>
            </Card>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 mb-6 border-2 border-accent-200">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-accent-600">
                  <Upload size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-accent-600 mb-1">
                    Upload a Photo of the Purchase Bill
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Upload receipt images to record purchase & payment details
                  </p>
                </div>
              </motion.div>
              <div className="text-center mt-4 text-accent-600 font-medium">
                or (add manually)
              </div>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-lg font-bold text-accent-600 mb-4">
                Collection Info *
              </h3>

              <div className="space-y-4">
                <Input
                  label="Purchase Price"
                  type="number"
                  value={formData.purchasePrice}
                  onChange={(e) =>
                    setFormData({ ...formData, purchasePrice: e.target.value })
                  }
                  placeholder="20.00"
                  leftIcon={<span className="text-text-tertiary">$</span>}
                />
                <p className="text-sm text-text-tertiary -mt-2">
                  Include taxes, shipping, and platform fees
                </p>

                <Input
                  label="My Valuation of this Collection"
                  type="number"
                  value={formData.valuation}
                  onChange={(e) =>
                    setFormData({ ...formData, valuation: e.target.value })
                  }
                  placeholder="your estimated current market value"
                  leftIcon={<span className="text-text-tertiary">$</span>}
                />
              </div>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-lg font-bold text-accent-600 mb-4">
                Time & Date
              </h3>

              <div className="space-y-4">
                <Select label="When it was purchased">
                  <option value="">Select Region</option>
                </Select>

                <Select label="When it was purchased">
                  <option value="">Select Region</option>
                </Select>

                <Input
                  label="Seller Name"
                  value={formData.sellerName}
                  onChange={(e) =>
                    setFormData({ ...formData, sellerName: e.target.value })
                  }
                  placeholder="Name of Seller, Dealer or Auction house"
                />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-accent-600 mb-4">
                Payment Reference Details
              </h3>

              <div className="space-y-4">
                <Input
                  label="Receipt / Invoice Number"
                  value={formData.receiptNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, receiptNumber: e.target.value })
                  }
                  placeholder="e.g., RCP -12345, INV-2024-001"
                />

                <Select
                  label="Payment Method"
                  value={formData.paymentMethod}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentMethod: e.target.value })
                  }
                >
                  <option value="">Select payment method</option>
                  <option value="credit">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash">Cash</option>
                </Select>
              </div>
            </Card>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 mb-6 border-2 border-accent-200">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-accent-600">
                  <Upload size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-accent-600 mb-1">
                    Upload Photos of your stamps
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Max 10MB each in JPG, PNG, WebP formats
                  </p>
                </div>
              </motion.div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-accent-600 mb-2">
                Stamp Images
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Upload up to 10 high-quality images of your item. Images will be
                automatically optimized and downsized.
              </p>

              <div className="text-center text-text-tertiary mb-4">
                4 more left out of 10
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl flex items-center justify-center text-6xl cursor-pointer"
                  >
                    {i % 2 === 0 ? '📮' : '🏛️'}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mt-6"
      >
        {currentStep > 1 && (
          <Button
            variant="secondary"
            size="lg"
            onClick={handleBack}
            leftIcon={<ArrowLeft size={20} />}
            className="flex-1"
          >
            Back
          </Button>
        )}
        <Button
          variant="primary"
          size="lg"
          onClick={currentStep === 3 ? handleSubmit : handleNext}
          rightIcon={currentStep === 3 ? undefined : <ArrowRight size={20} />}
          className="flex-1"
        >
          {currentStep === 3 ? 'Save Collection' : 'Next'}
        </Button>
      </motion.div>
    </div>
  );
};