import sys
import joblib

# Load the trained model
model = joblib.load('model.pkl')

# Get input data from command line arguments
input_data = [
    sys.argv[1],  # gender
    float(sys.argv[2]),  # ssc_p
    sys.argv[3],  # ssc_b
    float(sys.argv[4]),  # hsc_p
    sys.argv[5],  # hsc_b
    sys.argv[6],  # hsc_s
    float(sys.argv[7]),  # degree_p
    sys.argv[8],  # degree_t
    sys.argv[9],  # workex
    float(sys.argv[10]),  # etest_p
    sys.argv[11],  # specialisation
    float(sys.argv[12])  # mba_p
]

# Make prediction
prediction = model.predict([input_data])

# Print the prediction result
print(prediction[0])